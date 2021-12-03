module.exports = mongoose => {
    const Post = mongoose.model('post',
        mongoose.Schema({
                title: String,
                content: String,
                published: Boolean,
                comments: [
                    {
                        title: String,
                        content: String
                    }
                ]
            },
            {
                timestamp: true
            })
    )

    return Post

}