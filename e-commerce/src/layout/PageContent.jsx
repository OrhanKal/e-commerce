const PageContent = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      {children}  {/* Burada children'ı kullanarak içerikleri gösteriyoruz */}
    </div>
  );
};

export default PageContent;