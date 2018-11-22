import moment from 'moment';
import uuid from 'uuid';

class Fleet {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
        this.fleets = [];
    }
    /**
     * 
     * @returns {object} Fleet object
     */
    create(data) {
        const newFleet = {
            id: uuid.v4(),
            success: data.success || '',
            lowPoint: data.lowPoint || '',
            takeAway: data.takeAway || '',
            createdDate: moment.now(),
            modifiedDate: moment.now()
        };
        this.fleets.push(newFleet);
        return newFleet;
    }
    /**
     * 
     * @param {uuid} id
     * @returns {object} fleet object
     */
    findOne(id) {
        return this.fleets.find(fleet => fleet.id === id);
    }
    /**
     * @returns {object} returns all fleets
     */
    findAll() {
        return this.fleets;
    }
    /**
     * 
     * @param {uuid} id
     * @param {object} data 
     */
    update(id, data) {
        const fleet = this.findOne(id);
        const index = this.fleets.indexOf(fleet);
        this.fleets[index].driver = data['driver'] || fleet.driver;
        this.fleets[index].fleet = data['fleet'] || fleet.fleet;
        this.fleets[index].fleetName = data['fleetName'] || fleet.fleetName;
        this.fleets[index].modifiedDate = moment.now();
        return this.fleets[index];
    }
    /**
     * 
     * @param {uuid} id 
     */
    delete(id) {
        const fleet = this.findOne(id);
        const index = this.fleets.indexOf(fleet);
        this.fleets.splice(index, 1);
        return {};
    }
}
export default new Fleet ();