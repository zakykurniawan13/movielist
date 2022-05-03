

// MOVIE - BOOKMARK - USER

// persiapan

// MOVIE TABLE:

// id
// title
// original_language
// release_date
// poster_path
// backdrop_path
// vote_count
// vote_average
// overview


// USER TABLE:
// id
// name
// username
// email
// password
// avatar_path
// backdrop_path





// Jika klik bookmark, maka jalankan:
// 1. find movie id (body)
// 2. create row baru di many to many: User.addMovie(...movie)
// 3. 



/* ADD NEW BOOKMARK

1. GET user = await User.findOne({where: {id:user.id}})
2. GET movie yang mau di bookmark. Masukkan informasinya ke dalam variable bernama movie.
3. Buat row baru di tabel movie: Movie.create(...movie).
4. Buat row baru di tabel bookmark: User.addMovie(movie)

GET BOOKMARK

1. Ambil user_id dari user yang sedang login
2. Jalankan fungsi: User.findOne({include: Movie, as: favorites}) 

DELETE BOOKMARK

1. Ambil user_id
2. Ambil movie_id
3. jalankan fungsi: User_Bookmark({where: {
    user_id: userId,
    movie_id: movieId
}})



*/