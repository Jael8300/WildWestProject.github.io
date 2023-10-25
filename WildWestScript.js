// script.js

// Function to reset attribute percentages
function resetAttributes() {
  console.log("Resetting attributes...");
  localStorage.setItem('Compassion', 0);
  localStorage.setItem('Wisdom', 0);
  localStorage.setItem('Faith', 0);
}

  
// Function to update attribute percentages based on selected option and attribute mapping
function updateAttributes(selectedOption, attributeMapping) {
    const attribute = attributeMapping[selectedOption];
    const currentPercentage = parseFloat(localStorage.getItem(attribute) || 0);
    localStorage.setItem(attribute, currentPercentage + 25);
}
  
function checkOption(radioName, nextPageUrl, attributeMapping) {
    const radios = document.getElementsByName(radioName);
    let selected = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = true;
            // Save the selected value to localStorage
            updateAttributes(radios[i].value, attributeMapping);
            break;
        }
    }

    if (selected) {
        window.location.href = nextPageUrl;
    } else {
        if (currentLanguage === 'en') {
            alert('Please select an option before moving to the next question.');
        } else {
            alert('在进入下一个问题之前，请选择一个选项。');
        }
    }
}


// Function to show final results 
function showResults() {
    const compassion = parseFloat(localStorage.getItem('Compassion') || 0);
    const wisdom = parseFloat(localStorage.getItem('Wisdom') || 0);
    const faith = parseFloat(localStorage.getItem('Faith') || 0);
    let highestAttribute = "Compassion";
    let highestValue = compassion;

    if (wisdom > highestValue) {
        highestAttribute = "Wisdom";
        highestValue = wisdom;
    }

    if (faith > highestValue) {
        highestAttribute = "Faith";
        highestValue = faith;
    }

    let deity = "";

    switch (highestAttribute) {
        case "Compassion":
            deity = "Guanyin";
            break;
        case "Wisdom":
            deity = "Manjushri";
            break;
        case "Faith":
            deity = "Amitabha";
            break;
        default:
            deity = "Unknown";
    }

    const resultsDiv = document.getElementById('results');
    
    if (currentLanguage === 'en') {
      resultsDiv.innerHTML = `Your attributes are: ${compassion}% Compassion, ${wisdom}% Wisdom, ${faith}% Faith. <br><br> Your guardian deity is <span class="deity-name">${deity}</span>.`;
    } else {
      resultsDiv.innerHTML = `你的属性是：${compassion}% 同情心，${wisdom}% 智慧，${faith}% 信仰。<br><br> 你的守护神是  <span class="deity-name">${deity === "Guanyin" ? "观音" : deity === "Manjushri" ? "文殊" : "阿弥陀佛" }</span>。`;
    }
    showDeityInfo(deity);
}

function showDeityInfo(deity) {
  const deityInfoDiv = document.getElementById('deity-info');
  let deityInfo = '';

  switch (deity) {

    case 'Guanyin':
      if (currentLanguage === 'en') {
        deityInfo = '<span class="deity-info">Guanyin is believed to hear the cries of all beings and to offer compassion and relief from suffering.<br> Attributes: Compassion, mercy, kindness</span>';
      } else {
        deityInfo = '<span class="deity-info">观音被认为能听到所有生灵的呼喊，并提供慈悲和减轻痛苦。<br> 属性: 慈悲、仁慈、善良</span>';
      }
      deityImage = '<img src="./Images/guanyin.jpg" alt="Guanyin">';
      break;

    case 'Manjushri':
      if (currentLanguage === 'en') {
        deityInfo = '<span class="deity-info">Manjushri is revered as the embodiment of the wisdom of all the Buddhas. He is often invoked for wisdom and clarity in understanding the Dharma (Buddhist teachings).<br> Attributes: Wisdom, understanding, insight</span>';
      } else{
        deityInfo = '<span class="deity-info">文殊菩萨被尊崇为所有佛的智慧化身。他经常被祈求以获得理解佛法（佛教教义）的智慧和清晰度。<br> 属性: 智慧、理解、洞察</span>';
      }
      deityImage = '<img src="./Images/manjusri.jpg" alt="Manjushri">';
      break;

    case 'Amitabha':
      if (currentLanguage === 'en') {
        deityInfo = '<span class="deity-info">Central figure in Pure Land Buddhism. Believed to have created a Pure Land known as Sukhavati, where beings can be reborn through faith and devotion to Amitabha. The focus is often on Amitabha\' compassion and the vow to save all sentient beings. <br> Attributes: Infinite light, infinite life, compassion</span>';
      } else{
        deityInfo = '<span class="deity-info">净土宗的中心人物。被认为创造了一个名为极乐世界的净土，生灵通过对阿弥陀佛的信仰和虔诚可以在那里得到重生。重点通常放在阿弥陀佛的慈悲和拯救所有众生的誓愿上。<br> 属性: 无限的光、无限的生命、慈悲</span>';
      }
        deityImage = '<img src="./Images/amitabha.jpg" alt="Amitabha">';
      break;
    default:
      deityInfo = 'No deity selected.';
  }

  deityInfoDiv.innerHTML = `<div class="deity-image">${deityImage}</div><div class="deity-text">${deityInfo}</div>`;
}