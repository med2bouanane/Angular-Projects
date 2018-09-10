

class Trace {
    static paint(file) {
        return {
            msgInit: `********** RESULT OF ${file} ************`,
            msgFin: `********** FIN RESULT OF ${file} ************\n`
        }
    }
}

module.exports = Trace;