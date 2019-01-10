export const increse = (value) => {
  return {
    type: 'INCREMENT',
    value: value ? !isNaN(value) ? value : 1 : 1
  }
};

export const decrese = (value) => {
  return {
    type: 'DECREMENT',
    value: value ? !isNaN(value) ? value : 1 : 1
  }
};

export const reset = {
  type: 'RESET'
};