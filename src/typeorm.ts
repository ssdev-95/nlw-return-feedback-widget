import { AppDataSource, Feedback } from "./data-source"

AppDataSource.initialize().then(async () => {
    console.log('Typeorm initialized')
    // console.log("Inserting a new feedback into the database...")
    // const feedback = new Feedback()
    // feedback.type = "BUG"
    // feedback.comment = "Saw a bug"
    // feedback.screenshot = ""
    // await AppDataSource.manager.save(feedback)
    // console.log("Saved a new feedback with id: " + feedback.id)

    // console.log("Loading feedbacks from the database...")
    // const feedbacks = await AppDataSource.manager.find(Feedback)
    // console.log("Loaded feedbacks: ", feedbacks)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
