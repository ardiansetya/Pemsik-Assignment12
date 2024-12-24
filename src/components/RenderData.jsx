import { UseFetchData } from "../hooks/UseFetchData";
import Button from "./Button";

const RenderData = () => {
  const { mahasiswa } = UseFetchData();

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-5 overflow-hidden">
      <div className="flex items-center justify-between gap-5">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Daftar Mahasiswa
        </h1>
        <Button >Tambah Mahasiswa</Button>
      </div>

      <div className=" mt-5">
        <table className="table-auto min-w-full border-collapse border border-gray-300 text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">
                NIM
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">
                Nama
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">
                Alamat
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">
                Umur
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-600">
                Prodi
              </th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.data && mahasiswa.data.length > 0 ? (
              mahasiswa.data.map((mhs) => (
                <tr
                  key={mhs.id}
                  className="border-b hover:bg-gray-50 transition">
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    {mhs.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    {mhs.nim}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    {mhs.nama}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    {mhs.alamat}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    {mhs.umur}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-800">
                    {mhs.progdi?.nama || "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-4 py-3 text-center text-gray-600 italic">
                  Login diperlukan. Anda Belum Login!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RenderData;
