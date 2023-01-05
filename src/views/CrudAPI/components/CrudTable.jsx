import { useSelector } from "react-redux";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ setDataToEdit, deleteData }) => {
  const { data } = useSelector(state => state.crud);

  return (
    <div className="mx-1">
      <h3>Datatable</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((element) => (
              <CrudTableRow
                key={element.id}
                element={element}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">There is no data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
