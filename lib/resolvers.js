import mongoose from "mongoose";
import { Beach } from "./connectors";

export const resolvers = {
  Query: {
    beaches: () => {
      return new Promise((resolve, object) => {
        Beach.find((err, beach) => {
          if (err) reject(err);
          else resolve(beach);
        });
      });
    },
    beach: (root, { id }) => {
      return new Promise((resolve, object) => {
        Beach.findById(id, (err, beach) => {
          if (err) reject(err);
          else resolve(beach);
        });
      });
    }
  },
  Mutation: {
    createBeach: (root, { input }) => {
      const newBeach = new Beach({
        name: input.name,
        long: input.long,
        lat: input.lat
      });
      newBeach.id = newBeach._id;
      return new Promise((resolve, _) => {
        newBeach.save(err => {
          if (err) reject(err);
          else resolve(newBeach);
        });
      });
    },

    updateBeach: (root, { input }) => {
      return new Promise((resolve, object) => {
        Beach.findOneAndUpdate(
          { _id: input.id },
          input,
          { new: true },
          (err, beach) => {
            if (err) reject(err);
            else resolve(beach);
          }
        );
      });
    },

    deleteBeach: (root, { id }) => {
      return new Promise((resolve, object) => {
        Beach.remove({ _id: id }, err => {
          if (err) reject(err);
          else resolve("Deleted beach with success!");
        });
      });
    }
  }
};
