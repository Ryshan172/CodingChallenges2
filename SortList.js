/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // Base case
    if (!head || !head.next) return head;

    // Function to split the list into two halves
    const splitList = (head) => {
        let slow = head, fast = head, prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null; // split the list into two halves
        return slow;
    };

    // Function to merge two sorted lists
    const merge = (l1, l2) => {
        let dummy = new ListNode(0);
        let current = dummy;
        
        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        if (l1) current.next = l1;
        if (l2) current.next = l2;

        return dummy.next;
    };

    // Split the list into two halves
    const mid = splitList(head);

    // Recursively sort each half
    const left = sortList(head);
    const right = sortList(mid);

    // Merge the sorted halves
    return merge(left, right);
};

// Helper function to create a linked list from an array (for testing purposes)
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to an array (for testing purposes)
function linkedListToArray(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Example usage:
let head = createLinkedList([4, 2, 1, 3]);
head = sortList(head);
console.log(linkedListToArray(head)); // Output: [1, 2, 3, 4]

head = createLinkedList([-1, 5, 3, 4, 0]);
head = sortList(head);
console.log(linkedListToArray(head)); // Output: [-1, 0, 3, 4, 5]
