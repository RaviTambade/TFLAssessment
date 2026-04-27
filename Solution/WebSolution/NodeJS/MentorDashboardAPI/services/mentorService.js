module.exports = function mentorService(mentorRepository) {
    return {

        readPublishAssessment(callback) {
            mentorRepository.readPublishAssessment(callback);
        },

        readLearnerSkill(callback) {
            mentorRepository.readLearnerSkill(callback);
        },
         readMentorRecommendation(callback) {
            mentorRepository.readMentorRecommendation(callback);
        },
         readSkillHealth(callback) {
            mentorRepository.readSkillHealth(callback);
        },
         readMentorData(callback) {
            mentorRepository.readMentorData(callback);
        },
         readTestData(callback) {
            mentorRepository.readTestData(callback);
        }
    };
};
