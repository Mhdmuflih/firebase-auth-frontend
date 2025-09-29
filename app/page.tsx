
export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
        <div className="absolute top-4 left-4">
          <img
            // src={logo}
            // onClick={() => navigate('/')}
            alt="Company Logo"
            className="h-14 w-auto rounded-xl shadow-md hover:cursor-pointer"
          />
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-4">
          {/* <span className="text-white font-medium hidden sm:inline">Hi, {userName}</span> */}

          <button
            // onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
          >
            Logout
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-pulse">
          Welcome Firebase Authentication!
        </h1>
        <p className="text-lg text-gray-400 mb-8 text-center max-w-xl"> You are now successfully logged in! Use this dashboard to manage your account and access protected features. </p>
      </div>
    </main>
  );
}
