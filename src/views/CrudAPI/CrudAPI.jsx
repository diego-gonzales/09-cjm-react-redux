import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonHome from '../../components/ButtonHome';
import { helpHttp } from '../../helpers/helpHttp';
import { readAllMyData, createMyData, updateMyData, deleteMyData, noData } from '../../store/slices/crudSlice';
import CrudForm from './components/CrudForm';
import CrudTable from './components/CrudTable';
import Loader from './components/Loader';
import Message from './components/Message';

const CrudAPI = () => {
  const { data } = useSelector(state => state.crud);
  const dispatch = useDispatch();

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:5000/pokemons';

  useEffect(() => {
    setIsLoading(true);
    api.get(url).then((resp) => {
      if (!resp.err) {
        dispatch(readAllMyData(resp));
        setError(null);
      } else {
        dispatch(noData());
        setError(resp);
      }
      setIsLoading(false);
    });
  }, []);

  const createData = (newElement) => {
    newElement.id = Date.now();

    const options = {
      body: newElement,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((resp) => {
      if (!resp.err) {
        dispatch(createMyData(resp))
      } else {
        setError(resp);
      }
    });
  };

  const updateData = (newElement) => {
    const options = {
      body: newElement,
      headers: { 'content-type': 'application/json' },
    };

    api.put(`${url}/${newElement.id}`, options).then((resp) => {
      if (!resp.err) {
        dispatch(updateMyData(resp))
      } else {
        setError(resp);
      }
    });
  };

  const deleteData = (id) => {
    const areYouSure = window.confirm('Are you sure to delete the record?');

    if (!areYouSure) return;

    const options = {
      headers: { 'content-type': 'application/json' },
    };

    api.del(`${url}/${id}`, options).then((resp) => {
      if (!resp.err) {
        dispatch(deleteMyData(id))
      } else {
        setError(resp);
      }
    });
  };

  return (
    <>
      <h2>CRUD API</h2>
      <section className="my-container-column">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {isLoading && <Loader />}

        {error && (
          <Message
            message={`Error ${error.status}: ${error.statusText}`}
            bgColor={'#dc3545'}
          />
        )}

        {data && (
          <CrudTable
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </section>

      <div className="mx-1">
        <ButtonHome />
      </div>
    </>
  );
};

export default CrudAPI;
