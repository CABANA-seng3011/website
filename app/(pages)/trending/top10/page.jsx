// export default function Nasdaq100Page() {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchNasdaq100()
//       .then((groupedData) => {
//         setData(groupedData);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message || 'Unknown error');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="p-4">Loading...</p>;
//   if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

//   return (
//     <div className="p-6">
//       <DataDisplay data={data} />
//     </div>
//   );
// }