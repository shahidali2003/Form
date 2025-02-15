import React, { useState } from "react";

const App = () => {
  const [songname, setsongname] = useState("");
  const [artist, setartist] = useState("");
  const [album, setalbum] = useState("");
  const [poster, setposter] = useState("");
  const [alluser, setalluser] = useState([]);

  let submithandler = (e) => {
    e.preventDefault();
    
   

    const copy = [...alluser, { songname, artist, album, poster }];
    setalluser(copy);

    setsongname("");
    setartist("");
    setalbum("");
    setposter("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* 🎵 Form Section */}
      <form
        className="w-[400px] px-6 py-6 rounded-xl bg-white shadow-lg"
        onSubmit={submithandler}
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Add a New Song
        </h2>

        <div className="relative mb-4">
          <input
            value={songname}
            onChange={(e) => setsongname(e.target.value)}
            className="input-field peer"
            type="text"
            placeholder=" "
          />
          <label className="input-label">Enter Song Name</label>
        </div>

        <div className="relative mb-4">
          <input
            value={artist}
            onChange={(e) => setartist(e.target.value)}
            className="input-field peer"
            type="text"
            placeholder=" "
          />
          <label className="input-label">Enter Artist Name</label>
        </div>

        <div className="relative mb-4">
          <input
            value={album}
            onChange={(e) => setalbum(e.target.value)}
            className="input-field peer"
            type="text"
            placeholder=" "
          />
          <label className="input-label">Enter Album Name</label>
        </div>

        <div className="relative mb-4">
          <input
            value={poster}
            onChange={(e) => setposter(e.target.value)}
            className="input-field peer"
            type="text"
            placeholder=" "
          />
          <label className="input-label">Paste Poster URL</label>
        </div>

        <button className="gradient-button w-full">Add Song</button>
      </form>

      {/* 🎵 Songs List - Now with Image Fix & Shadow */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6 w-full px-6">
        {alluser.map((sets, index) => (
          <div
            key={index}
            className="w-[250px] h-auto p-4 bg-white rounded-xl shadow-2xl flex flex-col items-center space-y-2 border-l-4"
          >
            <h1 className="text-lg font-bold text-gray-800">{sets.songname}</h1>
            <h2 className="text-md text-gray-600">{sets.artist}</h2>
            <h2 className="text-md text-gray-600">{sets.album}</h2>

            {/* 🖼️ Image with Proper Cover & Center */}
            <div className="w-30 h-30 rounded-full overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover bg-center"
                src={sets.poster}
                alt="Song Poster"
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

