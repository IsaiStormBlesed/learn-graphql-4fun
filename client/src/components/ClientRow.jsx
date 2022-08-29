import { FaTrash } from "react-icons/fa";

export default function ClientRow({ client }) {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="bg-red-600 text-white px-2 py-2">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
