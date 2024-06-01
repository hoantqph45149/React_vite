import { Link } from "react-router-dom";

const Dashboard = ({ data, onDeleteProduct }) => {
  return (
    <>
      <h1>Hello, Admin</h1>
      <Link to="/admin/formproduct" className="btn btn-primary mb-3 mt-3">
        Add new product
      </Link>
      <table className="table table-bordered table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>
                {p.thumbnail ? (
                  <img src={p.thumbnail} alt={p.title} />
                ) : (
                  "Updating"
                )}
              </td>
              <td>{p.description}</td>
              <td>
                <button
                  className="btn btn-danger w-100 mb-3"
                  onClick={() => onDeleteProduct(p.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/admin/formproduct/${p.id}`}
                  className="btn btn-warning w-100   "
                >
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;
