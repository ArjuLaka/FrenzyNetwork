const spawn = require('child_process').spawn;

spawn('python', ["./PlagiarismChecker/plagiarism.py", "Renewable energy solutions are becoming cheaper, more reliable and more efficient every day.Our current reliance on fossil fuels is unsustainable and harmful to the planet, which is why we have to change the way we produce and consume energy. Implementing these new energy solutions as fast as possible is essential to counter climate change, one of the biggest threats to our own survival."])
process.stdout.on('data', function(data) {
    res.send(data.toString())
});