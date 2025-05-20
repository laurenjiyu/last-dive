# Red Reveal Puzzle Creator

This project contains several HTML files that implement "red reveal" puzzles - a type of puzzle that uses color properties to hide and reveal text.

## How Red Reveal Puzzles Work

Red reveal puzzles work based on the following principles:

1. Hidden text is written in cyan (blue-green) color
2. The text is camouflaged with "noise" in red, pink, and yellow colors
3. When viewed through a red filter, the cyan text appears dark while the red/pink/yellow noise blends with the filter
4. This makes the hidden text visible through the filter!

The science behind this is:
- Red filters block blue and green light
- Cyan is a combination of blue and green (with no red)
- When viewed through a red filter, cyan appears black
- Red, yellow and pink contain red components, so they appear more transparent through the filter

## Files Included

This project includes three different HTML files for creating and using red reveal puzzles:

1. **red-reveal.html**: A basic implementation of a red reveal puzzle that hides the word "RED"
2. **red-reveal-interactive.html**: An interactive version that lets you create your own puzzles
3. **red-reveal-printable.html**: A printable version with a red filter template included

## How to Use

### Basic Version (red-reveal.html)

1. Open the file in a web browser
2. Look at the puzzle - can you see the hidden word?
3. Use a red filter (like a piece of red cellophane or red plastic) over the puzzle to reveal the hidden word

### Interactive Version (red-reveal-interactive.html)

1. Open the file in a web browser
2. Read the instructions to understand how the puzzle works
3. Look at the example puzzle
4. Click "Simulate Red Filter" to see how the puzzle would look through a red filter
5. Enter your own word or phrase in the "Create Your Own Puzzle" section
6. Click "Generate Puzzle" to create a custom puzzle with your hidden text
7. Use the filter simulation to reveal your hidden word

### Printable Version (red-reveal-printable.html)

1. Open the file in a web browser
2. Click the "Print Puzzle and Filter" button
3. After printing, cut out the red filter template along the dashed line
4. Hold the filter over the puzzle to reveal the hidden word

## DIY Red Filter Ideas

If you don't have a red filter, you can try one of these alternatives:

- Red cellophane or plastic wrap
- Red transparent folder or document sleeve
- Red plastic report cover
- Red sunglasses
- Red plastic party cup (flattened)
- Red candy wrapper
- Red transparent plastic toy
- Red highlighter on a clear plastic sheet

The more transparent and red the material is, the better the effect will be!

## Science and Educational Value

Red reveal puzzles provide a fun way to explore color theory and how our eyes perceive different colors. They demonstrate how:

- Colors are created by reflecting specific wavelengths of light
- Filters work by blocking certain wavelengths
- The RGB (Red, Green, Blue) color model works
- Complementary colors interact

This makes them excellent educational tools for teaching color theory, optics, and visual perception.

## Technical Implementation

These puzzles are implemented using HTML, CSS, and JavaScript. The key technical aspects include:

- Using CSS to set text colors for the hidden words (cyan) and noise characters (red, pink, and yellow)
- Creating a simulated filter effect using a semi-transparent red overlay
- Dynamically generating puzzles from user input

Feel free to examine the source code to understand how these puzzles are implemented and modify them for your own purposes!
