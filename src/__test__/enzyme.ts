// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json'


// configure({ adapter: new Adapter() });

// describe('React unit tests', () => {
//     describe('LabeledText', () => {
//         let wrapper;
//         const props = {
//             label: '',
//             text: '.'
//         };

//         beforeAll(() => {
//             wrapper = shallow(<LabeledText {...props} />);
//         })

//         it('Snapshot testing labeled test', () => {
//             expect(toJson(wrapper)).toMatchSnapshot();
//         })

//         it('Renders a <p> tag with the label in bold', () => {
//             expect(wrapper.type()).toEqual('p');
//             expect(wrapper.text()).toEqual('Mega: Markets');
//             expect(wrapper.find('strong').text()).toMatch('Mega');
//           });
//         });
      
//         describe("MarketDisplay", () => {
//           // TODO: Test the following:
//           // 1. A MarketDisplay should display all of its text props inside a
//           // LabeledText component
//           // 2. It should also contain a div with two buttons
//           // 3. The functions passed down should be invoked on click
//           // 4. MarketDisplay should render a div with a class of `innerbox`, and the
//           // interior div wrapping the two buttons should have a class of `flex`
      
//           let wrapper;
//           let marketBox;
      
//           const props = {
//             index: 0,
//             location: "los angeles",
//             cards: 10,
//             percentage: 100,
//             addCard: jest.fn(),
//             deleteCard: jest.fn()
//           };
      
//           beforeAll(() => {
//             wrapper = shallow(<MarketDisplay {...props} />);
//             marketBox = wrapper.find(".marketBox");
//           });
      
//           it('Snapshot testing', () => {
//             expect(toJson(wrapper)).toMatchSnapshot();
//           })
      
//           it("MarketDisplay should display all of its text props inside a LabeledText component", () => {
//             const propValues = Object.values(props);
//             wrapper.find(LabeledText).forEach(node => {
//               expect(propValues.includes(node.prop("text"))).toBe(true);
//             });
//           });
      
//           it("Contains a div with two buttons", () => {
//             // console.log(wrapper.find("div").find("button").length) //you can log to the console the length 
      
//             // const buttonList = wrapper.find("div").find("button"); //can save wrapper to a cariable and then 
//             // expect(buttonList).toHaveLength(2);
//             // expect(buttonList.length).toBe(2);
      
//             // expect(wrapper.find("div").find("button").length).toBe(2); //can chain .find 's
//             expect(wrapper.children("div").children("button").length).toBe(2); //can chain .children 's
//           });
      
//           it("Passed down functions should be invoked onClick", () => {
//             marketBox.find("button").forEach(node => {
//               node.simulate("click");
//             });
//             // expect(props.cards).toBe(1);
//             expect(props.addCard).toHaveBeenCalled();
//             expect(props.deleteCard).toHaveBeenCalled();
//           });
      
//           it('Should render a div with class of "marketBox" with two buttons containing the class "flex"', () => {
//             expect(marketBox.at(0).hasClass("marketBox")).toBe(true);
//             const flex = marketBox.find(".flex");
//             expect(flex.hasClass("flex")).toBe(true);
//           });
//         });
      
      
//          // TODO: Test the following:
//           //   1. A MarketsDisplay should have an h4 element to display the 'Markets'
//           //   title
//           //   2. A single MarketDisplay is rendered for each market in the
//           //   marketList prop
//           //   3. The percentage prop should be a string calculated to two decimals.
//           //   Test for zero, a whole number, and a fractional value. (Right now this
//           //   is implemented incorrectly, so follow TDD here)
      
//         describe("MarketsDisplay", () => {
//           let wrapper;
//           let markets;
//           const props = {
//             totalCards: 500,
//             marketList: [
//               { location: "Los Angeles", cards: 200 },
//               { location: "Glendale", cards: 237 },
//               { location: "Las Vegas", cards: 63 },
//               { location: "New York City", cards: 0 }
//             ]
//           };
//           beforeAll(() => {
//             wrapper = shallow(<MarketsDisplay {...props} />);
//             markets = wrapper.find(MarketDisplay);
//           });
      
//           it('Snapshot testing', () => {
//             expect(toJson(wrapper)).toMatchSnapshot();
//           })
          
//           it("Should have an h4 element to display the 'Markets' title", () => {
//             const title = wrapper.find("h4");
//             expect(title.text()).toBe("Markets");
//           });
      
//           it("A single MarketDisplay is rendered for each market in the marketList prop", () => {
//             expect(markets.length).toBe(4);
//           });
      
//           it("Percentage prop should be a string calculated to 2 decimals", () => {
//             //test for zero
//             expect(markets.at(3).prop("percentage")).toBe(0);
//             //whole num
//             expect(markets.at(0).prop("percentage")).toBe("40.00");
//             //fractional value
//             expect(markets.at(1).prop("percentage")).toBe("47.40");
//           });
//         });
//       });
      