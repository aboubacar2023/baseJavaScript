/**
 * 
 * @param {string} tageName 
 * @param {object} attributes 
 * @return {HTMLElement}
 */
export function createElement(tageName, attributes) {
    const element  = document.createElement(tageName)
    for (const [attribute, value] of Object.entries(attributes)) {
        if (value !== null) {
            element.setAttribute(attribute, value)
        }
    }
    return element
}