import Singleton from '../Singleton/Singleton.ts'

class Caller extends Singleton {
    constructor() {
        super()
    }
    public callApi() {
        console.log('callApi')
    }
}
export default Caller