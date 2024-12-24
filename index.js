html = prompt("Do you know HTML(yes/no)").toLowerCase() === 'yes'
css = prompt("Do you know CSS(yes/no)").toLowerCase() === 'yes'
bootstrap = prompt("Do you know BOOTSTRAP(yes/no)").toLowerCase() === 'yes'
js = prompt("Do you know JAVASCRIPT(yes/no)").toLowerCase() === 'yes'
react = prompt("Do you know REACT(yes/no)").toLowerCase() === 'yes'
node = prompt("Do you know NODE(yes/no)").toLowerCase() === 'yes'

res = (html && css && bootstrap && !js && !react && !node)
        ? "You can become a UI/UX Designer"
        : (html && css && bootstrap && js && react && !node)
            ? "You can become a Frontend Developer"
            : (html && css && bootstrap && js && !react && node)
                ? "You can become a Backend Developer"
                    : (html && css && bootstrap && js && react && node)
                        ? "You can become a FullStack Developer"
                        : "Don't worry. If you want to learn these skills, then Go and Join 10000 Coders."

alert(res)