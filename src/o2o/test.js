class Question {
  constructor(
    introduce = '',
    surveyType = '',
    questionid = '',
    required = true,
    title = '',
    campusid = '',
    creatorid = '',
    surveyid = '',
    isKey = false,
    keyword = '',
    isOtherOption = false
  ) {
    this.introduce = introduce
    this.surveyType = surveyType
    this.questionid = questionid
    this.required = required
    this.title = title
    this.campusid = campusid
    this.creatorid = creatorid
    this.surveyid = surveyid
    this.isKey = false
    this.keyword = keyword
    this.isOtherOption = isOtherOption
    this.isQuestionnaire = this.surveyType === 1
    this.isPapers = this.surveyType === 2
  }
}

let p = new Question()
console.log(p, p.isPapers)
// class FillQuestion extends Question {
//   constructor(question) {
//     super(question)
//     this.isFillQuestion = true
//   }
// }

// class ChoiceQuestion extends Question {
//   constructor(question) {
//     super(question)
//     this.isChoice = true
//     const {
//       optionList = [
//         { title: 'A', introduce: '' },
//         { title: 'B', introduce: '' }
//       ]
//     } = question
//     this.optionList = optionList
//   }
// }

// class MultipleChoiceQuestion extends ChoiceQuestion {
//   constructor(question) {
//     question.keyword = question.keyword ? question.keyword.split(',') : []
//     super(question)
//     this.isMultipleChoice = true
//   }
// }

// class SingleChoiceQuestion extends ChoiceQuestion {
//   constructor(question) {
//     super(question)
//     this.isSingleChoice = true
//   }
// }

// class ImageQuestion extends Question {
//   constructor(question) {
//     super(question)
//     this.isImage = true
//   }
// }

// const SINGE_CHOICE_QUESTION = 1
// const MULTIPLE_CHOICE_QUESTION = 2
// const FILL_QUESTION = 3
// const IMAGE_QUESTION = 4

// const createQuestion = question => {
//   const { type } = question
//   if (type === SINGE_CHOICE_QUESTION) return new SingleChoiceQuestion(question)
//   if (type === MULTIPLE_CHOICE_QUESTION) {
//     return new MultipleChoiceQuestion(question)
//   }
//   if (type === FILL_QUESTION) return new FillQuestion(question)
//   if (type === IMAGE_QUESTION) return new ImageQuestion(question)
// }

// console.log(
//   createQuestion,
//   SINGE_CHOICE_QUESTION,
//   MULTIPLE_CHOICE_QUESTION,
//   FILL_QUESTION,
//   IMAGE_QUESTION
// )
