# Accordion Built to Meet Accessible Accordion Pattern
[![Screenshot-2023-06-13-at-17-59-33.png](https://i.postimg.cc/g26pWB5y/Screenshot-2023-06-13-at-17-59-33.png)](https://postimg.cc/zy56wpq3)

This accordion component has been developed in adherence to the accessible accordion patterns outlined by the Web Accessibility Initiative's Accessible Rich Internet Applications (WAI-ARIA) guidelines.

Prior to following the pattern in this application, I strongly recommend familiarizing yourself with the [guidance provided by the WAI ARIA team. ](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

## Accessibility
### Keyboard Support
- The collapsed/expanded state of the associated panel can be toggled by utilizing the Escape and Space keys.

### ARIA
- Each accordion header's title is enclosed within a `<button />` element.
- The association between each button within an accordion header and its corresponding panel is established by utilizing the `aria-controls="<#id>"` attribute.
- The state of each accordion header's corresponding panel is indicated by an ARIA attribute:
    - When expanded, the attribute `aria-expanded="true"` is applied.
    - When collapsed, the attribute `aria-expanded="false"` is applied.
- Each panel utilizes its associated accordion header as its label by employing the `aria-labelledby="<#header-id>"` attribute. 

### Design
The design for this accordion was inspired by [Ildiko Gasper](https://dribbble.com/shots/14535305-Accordion-UI-Design)
