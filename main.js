const Node = function(data) {
  return {
    value: data,
    next: null,
    prev: null
  }
}

const Lil = function() {
  return {
    addToStart: function(value) {
      const element = Node(value);

      if(this.head == null) {
        this.head = element;
        this.tail = element;
      } else {
        element.next = this.head;
        element.prev = null;
        this.head.prev = element;
        this.head = element;
      }
    },

    addToEnd: function(value) {
      const element = Node(value);

      if(this.tail == null) {
        this.head = element;
        this.tail = element;
      } else {
        /*
        let current = this.head;

        while(current.next != null) {
          current = current.next;
        }
        */

        let current = this.tail;

        current.next = element;
        element.prev = current;
        this.tail = element;
      }
    },

    removeFromStart: function() {
      let out = this.head.value;
      this.head = this.head.next;

      return out;
    },

    removeFromEnd: function() {
      /*
      let current = this.head;

      while(current.next.next != null) {
        current = current.next;
      }
      */
      let last = this.tail;
      const out = last.value;
      last.prev.next = null;
      this.tail = last.prev;

      return out;
    },

    getAt: function(index) {
      if(this.head == null) {
        return null;
      }

      let current = this.head
      for(let i = 0; i < index; i++) {
        current = current.next;
      }

      return current.value;
    },

    removeAt: function(index) {
      if(this.head == null) {
        return null;
      }

      let current = this.head
      for(let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      let out = current.next;
      let after = out.next;

      current.next = after;
      return out.value;
    },

    head: null,
    value: undefined,
    tail: null
  }
}

if (typeof Node == 'undefined') {
  Node = undefined;
}

if (typeof Lil == 'undefined') {
  Lil = undefined;
}



module.exports = {
  Lil,
  Node,
}
