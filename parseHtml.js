class Node {
    constructor(tagName) {
        this.tagName = tagName;
        this.children = [];
    }
}

function parseHTML(html) {
    const root = new Node('root');
    const stack = [root];
    let current = root;

    let i = 0;
    while (i < html.length) {
        if (html[i] === '<') {
            if (html[i + 1] === '/') {
                // Closing tag
                stack.pop();
                i += 2;
            } else {
                // Opening tag
                let j = i + 1;
                while (html[j] !== '>') {
                    j++;
                }
                const tagName = html.substring(i + 1, j);
                const newNode = new Node(tagName);
                current.children.push(newNode);
                stack.push(newNode);
                current = newNode;
                i = j + 1;
            }
        } else {
            // Text content
            let j = i;
            while (html[j] !== '<') {
                j++;
            }
            const text = html.substring(i, j).trim();
            if (text) {
                const textNode = new Node('#text');
                textNode.textContent = text;
                current.children.push(textNode);
            }
            i = j;
        }
    }

    return root;
}

function search(tree, value) {
    const queue = [tree];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.tagName === value || (current.textContent && current.textContent === value)) {
            return current;
        }
        queue.push(...current.children);
    }
    return null;
}

// Example usage:
const html = `<div>
    <div>
        <a>
        </a>
    </div>
    <div>
        <p>
        </p>
    </div>
</div>`;

const tree = parseHTML(html);
console.log(tree);
console.log(search(tree, 'div')); // Search for tag name
console.log(search(tree, 'a')); // Search for tag name
console.log(search(tree, 'p')); // Search for tag name
console.log(search(tree, '#text')); // Search for text content
