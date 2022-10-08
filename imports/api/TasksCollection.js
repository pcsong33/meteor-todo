import { Mongo } from 'meteor/mongo';
 
// create a new collection to store tasks
export const TasksCollection = new Mongo.Collection('tasks');