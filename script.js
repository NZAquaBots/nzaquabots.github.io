// Progress tracking and interactive functionality
let completedSteps = new Set();
let totalSteps = 25; // Total number of steps (24 main steps + 1 for either spade OR croc clip completion)

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeSteps();
    updateProgress();
    loadProgress();
});

// Initialize step functionality
function initializeSteps() {
    const stepCards = document.querySelectorAll('.step-card');
    
    stepCards.forEach(card => {
        const header = card.querySelector('.step-header');
        
        // Add click event to toggle step content
        header.addEventListener('click', function() {
            toggleStep(card);
        });
        
        // Expand first step by default
        if (card.dataset.step === '1') {
            card.classList.add('expanded');
        }
    });
}

// Toggle step expansion
function toggleStep(stepCard) {
    stepCard.classList.toggle('expanded');
    
    // Smooth scroll to step if expanding
    if (stepCard.classList.contains('expanded')) {
        setTimeout(() => {
            stepCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
    }
}

// Complete a step
function completeStep(stepNumber) {
    const stepCard = document.querySelector(`[data-step="${stepNumber}"]`);
    const button = stepCard.querySelector('.btn-complete');
    
    if (!completedSteps.has(stepNumber)) {
        // Mark step as completed
        completedSteps.add(stepNumber);
        stepCard.classList.add('completed');
        
        // Update button
        button.innerHTML = '<i class="fas fa-check-circle"></i> Completed!';
        button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        
        // Add celebration effect
        createCelebration(stepCard);
        
        // Auto-expand next step
        expandNextStep(stepNumber);
        
        // Update progress
        updateProgress();
        
        // Save progress
        saveProgress();
        
        // Show encouraging message
        showEncouragement(stepNumber);
    } else {
        // Unmark step (allow toggling)
        completedSteps.delete(stepNumber);
        stepCard.classList.remove('completed');
        
        button.innerHTML = '<i class="fas fa-check"></i> Mark Complete';
        button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
        
        updateProgress();
        saveProgress();
    }
}

// Create celebration effect
function createCelebration(stepCard) {
    const celebration = document.createElement('div');
    celebration.innerHTML = '🎉';
    celebration.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 2rem;
        animation: celebrationBounce 1s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    stepCard.style.position = 'relative';
    stepCard.appendChild(celebration);
    
    // Add animation keyframes if not already added
    if (!document.querySelector('#celebrationStyle')) {
        const style = document.createElement('style');
        style.id = 'celebrationStyle';
        style.textContent = `
            @keyframes celebrationBounce {
                0% { transform: scale(0) rotate(0deg); opacity: 0; }
                50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
                100% { transform: scale(1) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove celebration after animation
    setTimeout(() => {
        celebration.remove();
    }, 1000);
}

// Expand next step automatically
function expandNextStep(currentStep) {
    const nextStepCard = document.querySelector(`[data-step="${currentStep + 1}"]`);
    if (nextStepCard && !nextStepCard.classList.contains('expanded')) {
        setTimeout(() => {
            nextStepCard.classList.add('expanded');
            nextStepCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 500);
    }
}

// Update progress bar
function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const startAgainBtn = document.getElementById('startAgainBtn');
    
    // Calculate progress considering that steps 25 and 26 are alternatives (spade OR croc clip)
    let adjustedCompletedSteps = completedSteps.size;
    if (completedSteps.has(25) && completedSteps.has(26)) {
        adjustedCompletedSteps -= 1; // Don't count both alternatives
    }
    
    const percentage = Math.round((adjustedCompletedSteps / totalSteps) * 100);
    
    progressFill.style.width = percentage + '%';
    progressPercent.textContent = percentage + '%';
    
    // Show start again button if any progress has been made
    if (completedSteps.size > 0) {
        startAgainBtn.style.display = 'block';
    } else {
        startAgainBtn.style.display = 'none';
    }
    
    // Change color based on progress
    if (percentage >= 100) {
        progressFill.style.background = 'linear-gradient(90deg, #2ecc71, #27ae60)';
        showCompletionMessage();
    } else if (percentage >= 75) {
        progressFill.style.background = 'linear-gradient(90deg, #f39c12, #e67e22)';
    } else {
        progressFill.style.background = 'linear-gradient(90deg, #4facfe, #00f2fe)';
    }
}

// Show encouraging messages
function showEncouragement(stepNumber) {
    const messages = [
        "Great job! You're off to a fantastic start! 🚀",
        "Awesome work! Keep it up! 💪",
        "You're doing amazing! 🌟",
        "Excellent progress! You're a natural! 🎯",
        "Fantastic! You're really getting the hang of this! ⚡",
        "Outstanding work! Keep going! 🏆",
        "You're crushing it! Almost there! 🔥",
        "Incredible job! You're so close! 🎊",
        "Amazing work! Just a few more steps! 🚀",
        "You're unstoppable! Keep it up! 💫"
    ];
    
    const milestones = {
        5: "🎉 Quarter way there! You're doing great!",
        10: "🌟 Halfway point! You're amazing!",
        15: "🚀 Three quarters done! Almost there!",
        20: "🏆 So close to the finish line!",
        26: "🎊 CONGRATULATIONS! You've built your AquaBot controller!"
    };
    
    let message = milestones[stepNumber] || messages[Math.floor(Math.random() * messages.length)];
    
    showToast(message);
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(toast);
    
    // Slide in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Modified completion flow - guide to testing instead of immediate celebration
function showCompletionMessage() {
    // Don't show celebration yet - guide to testing first
    showToast('🎯 Build complete! Now let\'s test your controller to make sure it works perfectly!');
    
    // Scroll to testing section
    setTimeout(() => {
        const testingSection = document.getElementById('testing-section');
        testingSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 1000);
}

// Testing functionality
let completedTests = new Set();
let testResults = new Map();

function completeTest(testNumber) {
    completedTests.add(testNumber);
    const testStep = document.querySelector(`[data-test="${testNumber}"]`);
    const button = testStep.querySelector('.btn-test-complete');
    
    button.innerHTML = '<i class="fas fa-check-circle"></i> Completed!';
    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    
    showToast(`Test ${testNumber} completed! 📋`);
}

function testResult(testNumber, result) {
    testResults.set(testNumber, result);
    const testStep = document.querySelector(`[data-test="${testNumber}"]`);
    
    if (result === 'pass') {
        testStep.style.background = 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)';
        testStep.style.borderLeft = '5px solid #2ecc71';
        showToast(`Great! Test ${testNumber} passed! ✅`);
    } else {
        testStep.style.background = 'linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)';
        testStep.style.borderLeft = '5px solid #e74c3c';
        showToast(`Test ${testNumber} needs attention. Let\'s troubleshoot! 🔧`);
    }
    
    // Check if all critical tests are done
    checkTestingComplete();
}

function checkTestingComplete() {
    const test3Result = testResults.get(3);
    const test4Result = testResults.get(4);
    
    if (test3Result && test4Result) {
        if (test3Result === 'pass' && test4Result === 'pass') {
            // All tests passed - show success
            document.getElementById('testing-complete').style.display = 'block';
            setTimeout(() => {
                showToast('🎉 Congratulations! You\'ve completed all the build steps! Time to test your controller!', 'success');
            }, 500);
        } else {
            // Some tests failed - show troubleshooting
            showTroubleshooting();
        }
    }
}

// Start again function - reset all progress
function startAgain() {
    if (confirm('Are you sure you want to start again? This will reset all your progress.')) {
        // Clear all completed steps
        completedSteps.clear();
        
        // Reset all step cards
        const stepCards = document.querySelectorAll('.step-card');
        stepCards.forEach(card => {
            card.classList.remove('completed', 'expanded');
            const button = card.querySelector('.btn-complete');
            if (button) {
                button.innerHTML = '<i class="fas fa-check"></i> Mark Complete';
                button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
            }
        });
        
        // Reset test states
        const testSteps = document.querySelectorAll('.test-step');
        testSteps.forEach(step => {
            step.classList.remove('completed', 'failed');
        });
        
        // Reset troubleshooting states
        const troubleSteps = document.querySelectorAll('.trouble-step');
        troubleSteps.forEach(step => {
            step.classList.remove('fixed');
        });
        
        // Hide testing and troubleshooting sections
        document.getElementById('testing-section').style.display = 'none';
        document.getElementById('troubleshooting-section').style.display = 'none';
        document.getElementById('testing-complete').style.display = 'none';
        
        // Reset celebration modal
        const celebrationModal = document.getElementById('celebration-modal');
        if (celebrationModal) {
            celebrationModal.style.display = 'none';
        }
        
        // Clear test results
        testResults.clear();
        completedTests.clear();
        
        // Reset troubleshooting button states
        const troubleButtons = document.querySelectorAll('.btn-trouble-fixed');
        troubleButtons.forEach(button => {
            button.innerHTML = '<i class="fas fa-check"></i> Fixed This Issue';
            button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
        });
        
        // Reset test button states
        const testButtons = document.querySelectorAll('.btn-test-complete');
        testButtons.forEach(button => {
            button.innerHTML = '<i class="fas fa-check"></i> Test Complete';
            button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
        });
        
        // Expand first step
        const firstStep = document.querySelector('[data-step="1"]');
        if (firstStep) {
            firstStep.classList.add('expanded');
        }
        
        // Update progress and save
        updateProgress();
        saveProgress();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        showToast('🔄 Starting fresh! Let\'s build your AquaBot controller!', 'info');
    }
}

function troubleFixed(issueNumber) {
    const troubleStep = document.querySelectorAll('.trouble-step')[issueNumber - 1];
    const button = troubleStep.querySelector('.btn-trouble-fixed');
    // ...
    
    button.innerHTML = '<i class="fas fa-check-circle"></i> Fixed!';
    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    troubleStep.style.background = 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)';
    
    showToast(`Issue ${issueNumber} fixed! Great work! 🔧`);
}

function retestController() {
    // Reset test results
    testResults.clear();
    
    // Hide troubleshooting and show testing again
    document.getElementById('troubleshooting-section').style.display = 'none';
    document.getElementById('testing-complete').style.display = 'none';
    
    // Reset test step styles
    document.querySelectorAll('.test-step').forEach(step => {
        step.style.background = 'linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%)';
        step.style.borderLeft = 'none';
    });
    
    // Scroll back to testing
    setTimeout(() => {
        document.getElementById('testing-section').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 500);
    
    showToast('Let\'s test your controller again! 🔄');
}

function showFinalCelebration() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        margin: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    `;
    
    content.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
        <h2 style="color: #2ecc71; margin-bottom: 20px; font-size: 2rem;">Mission Accomplished!</h2>
        <p style="font-size: 1.2rem; margin-bottom: 30px; color: #2c3e50;">
            Your AquaBot controller is built AND tested! 
            You're now ready to explore the underwater world! 🌊
        </p>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); 
                       color: white; border: none; padding: 15px 30px; 
                       border-radius: 25px; font-size: 1.1rem; 
                       font-weight: 600; cursor: pointer;">
            Ready to Dive! 🚀
        </button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Add confetti effect
    createConfetti();
}

// Create confetti effect
function createConfetti() {
    const colors = ['#4facfe', '#00f2fe', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}%;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 1500;
                animation: confettiFall 3s linear forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 100);
    }
    
    // Add confetti animation if not already added
    if (!document.querySelector('#confettiStyle')) {
        const style = document.createElement('style');
        style.id = 'confettiStyle';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('aquabot-progress', JSON.stringify([...completedSteps]));
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('aquabot-progress');
    if (saved) {
        const steps = JSON.parse(saved);
        steps.forEach(stepNumber => {
            completedSteps.add(stepNumber);
            const stepCard = document.querySelector(`[data-step="${stepNumber}"]`);
            const button = stepCard.querySelector('.btn-complete');
            
            stepCard.classList.add('completed');
            button.innerHTML = '<i class="fas fa-check-circle"></i> Completed!';
            button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        });
        updateProgress();
    }
}

// Reset progress (for testing)
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        completedSteps.clear();
        localStorage.removeItem('aquabot-progress');
        
        document.querySelectorAll('.step-card').forEach(card => {
            card.classList.remove('completed');
            const button = card.querySelector('.btn-complete');
            button.innerHTML = '<i class="fas fa-check"></i> Mark Complete';
            button.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
        });
        
        updateProgress();
        showToast('Progress reset! Ready to start fresh! 🔄');
    }
}

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'r' to reset progress (for testing)
    if (e.key === 'r' && e.ctrlKey) {
        e.preventDefault();
        resetProgress();
    }
    
    // Press 'p' to show current progress
    if (e.key === 'p' && e.ctrlKey) {
        e.preventDefault();
        showToast(`Progress: ${completedSteps.size}/${totalSteps} steps completed! 📊`);
    }
});

// Show connection steps based on choice
function showSteps(type) {
    const spadeSteps = document.getElementById('spade-steps');
    const crocSteps = document.getElementById('croc-steps');
    
    if (type === 'spade') {
        spadeSteps.style.display = 'block';
        crocSteps.style.display = 'none';
        
        // Scroll to the steps
        setTimeout(() => {
            spadeSteps.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
        
        showToast('Great choice! Spade connectors provide a secure connection! 🔌');
    } else if (type === 'croc') {
        crocSteps.style.display = 'block';
        spadeSteps.style.display = 'none';
        
        // Scroll to the steps
        setTimeout(() => {
            crocSteps.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
        
        showToast('Excellent! Croc clips are easy to use and swap! 🐊');
    }
}

// Add touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        // Add any swipe functionality here if needed
    }
}
