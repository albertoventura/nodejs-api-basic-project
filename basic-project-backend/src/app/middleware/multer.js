const multer = require("multer");
const path = require("path");

const ds = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const uploadFilter = function (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    // To reject this file pass `false`, like so:
    cb(null, false)

    // To accept the file pass `true`, like so:
    cb(null, true)

    // You can always pass an error if something goes wrong:
    cb(new Error('I don\'t have a clue!'))
  
}
  
const upload = multer({ 
    storage: ds,
    /* fileFilter: uploadFilter, */
});

module.exports = upload;