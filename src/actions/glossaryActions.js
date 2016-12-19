import {
  GLOSSARY_HIDE,
  GLOSSARY_SHOW,
  GLOSSARY_SHOW_TERM,
} from './actionTypes'

export const hide = () => ({
  type: GLOSSARY_HIDE,
})

export const show = () => ({
  type: GLOSSARY_SHOW,
})

export const showTerm = term => ({
  type: GLOSSARY_SHOW_TERM,
  term,
})