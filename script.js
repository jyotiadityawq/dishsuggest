const foodIdeas = {
    India: {
        continental: {
            breakfast: ["Masala Dosa", "Aloo Paratha", "Poha", "Upma", "Pesarattu"],
            brunch: ["Pav Bhaji", "Chole Bhature", "Paneer Tikka", "Vegetable Sandwich", "Dhokla"],
            lunch: ["Biryani", "Paneer Butter Masala", "Dal Makhani", "Rajma", "Palak Paneer"]
        },
        snacks: {
            breakfast: ["Samosa", "Kachori", "Pakora", "Vada Pav", "Aloo Tikki"],
            brunch: ["Sev Puri", "Pani Puri", "Dahi Puri", "Bhel Puri", "Aloo Chaat"],
            lunch: ["Chaat", "Samosa", "Dhokla", "Kachori", "Vada Pav"]
        }
    },
    USA: {
        continental: {
            breakfast: ["Pancakes", "Waffles", "Omelette", "French Toast", "Bagels"],
            brunch: ["Club Sandwich", "Caesar Salad", "Chicken Wings", "Mac and Cheese", "BLT Sandwich"],
            lunch: ["Burger", "Hot Dog", "Philly Cheesesteak", "Clam Chowder", "BBQ Ribs"]
        },
        snacks: {
            breakfast: ["Donuts", "Muffins", "Granola Bars", "Smoothie", "Popcorn"],
            brunch: ["Nachos", "Chicken Nuggets", "Mozzarella Sticks", "Potato Skins", "Deviled Eggs"],
            lunch: ["Pretzels", "Chips and Salsa", "Fries", "Buffalo Wings", "Onion Rings"]
        }
    },
    UK: {
        continental: {
            breakfast: ["Full English Breakfast", "Crumpets", "Porridge", "Bacon Sandwich", "Toast"],
            brunch: ["Ploughman's Lunch", "Scotch Egg", "Fish and Chips", "Sausage Roll", "Cornish Pasty"],
            lunch: ["Shepherd's Pie", "Sunday Roast", "Bangers and Mash", "Beef Wellington", "Lancashire Hotpot"]
        },
        snacks: {
            breakfast: ["Scones", "Flapjacks", "Tea Cakes", "Biscuits", "Shortbread"],
            brunch: ["Pork Pies", "Cheese Straws", "Pickled Onions", "Scotch Eggs", "Sausage Rolls"],
            lunch: ["Pasties", "Scotch Eggs", "Cornish Pasty", "Cheese and Onion Crisps", "Twiglets"]
        }
    }
};

function generateIdeas() {
    const country = document.getElementById('country').value;
    const foodType = document.getElementById('foodType').value;
    const time = document.getElementById('time').value;

    const ideas = foodIdeas[country][foodType][time];
    const ideasList = ideas.map(idea => `<li>${idea}</li>`).join('');

    document.getElementById('ideas').innerHTML = `
        <h2>Food Ideas</h2>
        <p>Country: ${country}</p>
        <p>Food Type: ${foodType}</p>
        <p>Time: ${time}</p>
        <ul>${ideasList}</ul>
    `;

    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function printPopup() {
    const printContent = document.getElementById('ideas').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}
