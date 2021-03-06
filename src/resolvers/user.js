module.exports = {
    notes: async (user, args, {models}) => {
        return await models.Note.find({author: user._id}).sort({_id: -1})
    },
    favorits: async (user, args, {models}) => {
        return await models.Note.find({favoritedBy: user._id}).sort({_id: -1})
    } 
}