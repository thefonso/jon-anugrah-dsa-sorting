class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = _Node;

// simply add prev in constructor to make a doubly-linked list.