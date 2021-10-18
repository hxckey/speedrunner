const db = connect("mongodb://localhost:27017/speedrun_chest")

db.speedruns.drop()

db.speedruns.insertMany([
    {game: "Mario64", runner: "mrOJ", time: 76},
    {game: "Resident Evil 2", runner: "hxckey", time: 124},
    {game: "Mario Odyssey", runner: "mrOJ", time: 540},
    {game: "Resident Evil 2", runner: "CarcinogenSDA", time: 116},
])
