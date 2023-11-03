    document.addEventListener("DOMContentLoaded", function () {
        // Função para rolagem suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Destacar item do menu quando a seção está visível
        const sections = document.querySelectorAll("section");
        const menuLinks = document.querySelectorAll("nav a");

        window.addEventListener("scroll", function () {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight - 50) {
                    current = section.getAttribute("id");
                }
            });

            menuLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        });
    });
