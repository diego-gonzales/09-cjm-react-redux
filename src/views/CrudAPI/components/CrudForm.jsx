import { useState, useEffect } from 'react';

const initialForm = {
  name: '',
  type: '',
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [myForm, setMyForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setMyForm(dataToEdit);
    } else {
      setMyForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setMyForm({
      ...myForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!myForm.name || !myForm.type) {
      alert('Form is invalid');
      return;
    }

    if (myForm.id === null) {
      createData(myForm);
    } else {
      updateData(myForm);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setMyForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className='mx-1'>
      <h3>{!dataToEdit ? 'Add' : 'Edit'}</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={myForm.name}
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          onChange={handleChange}
          value={myForm.type}
        />
        <input type="submit" value="Send" />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
