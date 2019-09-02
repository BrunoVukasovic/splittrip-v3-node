const Review = require("../models/Review");
const Rating = require("../models/Rating");
const Comment = require("../models/Comment");

const reviewController = {
  async findbyPk(req, res) {
    const { reviewID } = req.body;
    Review.findByPk(reviewID, {
      include: [Rating, Comment]
    })
      .then(review => {
        res.send(review);
      })
      .catch(error => console.log(error));
  },

  async findbyTripID(req, res) {
    const { tripID } = req.body;
    Review.findAll({ where: { TripID: tripID }, include: [Comment, Rating] })
      .then(trips => {
        res.send(trips);
      })
      .catch(error => console.log(error));
  },

  async createNewReview(req, res) {
    const {
      heading,
      description,
      bookedTripID,
      tripID,
      rating
    } = req.body.review;

    Comment.create({
      Heading: heading,
      Description: description
    })
      .then(comment => {
        Review.create({
          BookedTripID: bookedTripID,
          TripID: tripID,
          RatingID: rating,
          CommentID: comment.CommentID
        })
          .then(res.status(201).send("Review created"))
          .catch(error => console.log(error));
      })
      .then(res.status(201).send("Comment created"))
      .catch(error => console.log(error));
  }
};

module.exports = reviewController;