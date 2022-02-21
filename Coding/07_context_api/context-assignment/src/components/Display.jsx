export const Display = ({ token, status }) => {
  return (
    <div>
      token: {token}, status: {!status ? "Ofline" : "Online"}
    </div>
  );
};
