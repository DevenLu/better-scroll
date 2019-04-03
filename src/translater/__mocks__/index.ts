import EventEmitter from '@/base/EventEmitter'

const Translater = jest.fn().mockImplementation(content => {
  return {
    style: content.style,
    hooks: new EventEmitter(['beforeTranslate', 'translate']),
    getComputedPosition: jest.fn(),
    translate: jest.fn(),
    sss: 111
  }
})

export default Translater