const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white" style={{ height: "calc(100vh - 60px)" }}>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-50"></div>
            <p className="mt-4 text-lg font-medium">Cargando...</p>
        </div>
    );
}

export default Loading
