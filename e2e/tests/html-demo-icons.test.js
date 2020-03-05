/// <reference types="cypress" />

/**
 * List of custom elements to test
 */
const icons=[
  'dv4-icon-cancel-circle',
  'dv4-icon-arrow-right'
]

describe("Icons html-demo page",()=>{
  before(()=>{
    cy.visit("http://localhost:5000/icons")
  })


  it('Loads icons page',()=>{
    cy.get("title")
      .should("contain.text","Icons - web components")
  })

  it("Has H1 with SVG Icons in it",()=>{
    cy.get(".section-title")
      .contains("SVG Icons")
  })

  it("Has custom elements with dv4-icon class",()=>{
    cy.get(".dv4-icon")
      .its('length')
      .should("be.greaterThan", 0)
  })
})

describe("Demo icons on the page",()=>{
  before(()=>{
    cy.visit("http://localhost:5000/icons")
  })

  it(`Contains all icons [${icons.length}]`,()=>{
    icons.map(icon=>{
      cy.get(icon)
        .should("exist")
    })
  })

  it(`All icons [${icons.length}] use .dv4-icon class`,()=>{
    icons.map(icon=>{
      cy.get(icon)
        .should("have.class", "dv4-icon")
    })
  })

  it(`All icons [${icons.length}] have title attribute`,()=>{
    icons.map(icon=>{
      cy.get(icon)
        .should("have.attr", "title")
    })
  })

  it(`All icons [${icons.length}] have SVG in the shadowRoot`,()=>{
    icons.map(icon=>{
      cy.get(icon)
        .then(e=>{
          //get element reference
          //from selector -> it should be first element
          const [el] = e.get()
          const svg = el.shadowRoot.querySelector('svg')
          // const title = svg.querySelector('title')
          // console.log("svg...",svg)
          if (svg) return true
        })
        .should('be.true')
    })
  })
})