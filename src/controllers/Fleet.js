import FleetModel from '../models/Fleet';

const Fleet = {
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} Fleet object 
     */
    create(req, res) {
        if (!req.body.driver && !req.body.fleet && !req.body.fleetName) {
            return res.status(400).json({
                status: '404',
                message: 'All fields required'
            });
        }
        const fleet = FleetModel.create(req.body);
        return res.status(201).send(fleet);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} fleets array
     */
    getAll(req, res) {
        const fleets = FleetModel.findAll();
        return res.status(200).send(fleets);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res
     * @returns {object} fleet object
     */
    getOne(req, res) {
        const fleet = FleetModel.findOne(req.params.id);
        if (!fleet) {
            return res.status(404).json({
                status: '404',
                message: 'fleet  not found'
            });
        }
        return res.status(200).send(fleet);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} updated fleet
     */
    update(req, res) {
        const fleet = FleetModel.findOne(req.params.id);
        if (!fleet) {
            return res.status(404).json({
                status: '404',
                message: 'fleet  not found'
            });
        }
        const updatedFleet = FleetModel.update(req.params.id, req.body);
        return res.status(200).send(updatedFleet);
    },
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {void} return status code 204 
     */
    delete(req, res) {
        const fleet = FleetModel.findOne(req.params.id);
        if (!fleet) {
            return res.status(404).json({
                status: '404',
                message: 'fleet  not found'
            });
        }
        const ref = FleetModel.delete(req.params.id);
        return res.status(204).send(ref);
    }
};

export default Fleet;