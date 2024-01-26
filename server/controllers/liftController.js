/*import e from 'express';
import Lift from '../models/liftModel.js';
import mongoose from 'mongoose';

export const getLifts = async (req, res) => {
    const lifts = await Lift.find({});
    res.status(200).json(lifts);
}

export const getLift = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No lift found"});
    }
    const lift = await Lift.findById(id);
    if(!lift){
        return res.status(404).json({error: 'No lift found'});
    }
    res.status(200).json(lift);
}

export const createLift = async (req,res) => {
    const {name, sets, setWeight, pr, comments} = req.body;
    try {
        const lift = await Lift.create({name, sets, setWeight, pr, comments});
        res.status(200).json(lift)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const deleteLift = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No lift found"});
    }
    const lift = await Lift.findOneAndDelete({_id: id});
    if(!lift){
        return res.status(404).json({error: 'No lift found'});
    }
}

export const editLift = async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No lift found"});
    }
    const lift = await Lift.findOneAndUpdate({_id:id}, {...req.body});
    if(!lift){
        return res.status(404).json({error: 'No lift found'});
    }
}*/