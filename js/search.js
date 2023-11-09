const token = "547|KYNurnOR3y2x96EqrBuonzavXrMlfeffDw4Ob15A8be72764";
      const apiUrls = [
        "https://api.secure.tabiblibdz.com/api/specialities",
        "https://api.secure.tabiblibdz.com/api/practician",
        "https://api.secure.tabiblibdz.com/api/practicians",
        "https://api.secure.tabiblibdz.com/api/establishments",
        "https://api.secure.tabiblibdz.com/api/locations",
      ];

      const searchInput = document.getElementById("search-input");
      const resultContainer = document.getElementById("result-container");
      let searchTimeout;
      let lastSearch = "";

      searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.trim().toLowerCase();
        if (searchText === lastSearch) {
          return; // La recherche n'a pas changé, ne rien faire
        }
        clearTimeout(searchTimeout);
        // Mettre à jour la dernière recherche
        lastSearch = searchText;
        searchTimeout = setTimeout(() => {
          // const searchText = searchInput.value.toLowerCase();
          searchInAPIs(searchText);
        }, 550); // 3 seconds delay
      });

      function searchInAPIs(searchText) {
        resultContainer.innerHTML = ""; // Clear previous results

        if (searchText.trim() === "") {
          // La barre de recherche est vide, vous pouvez choisir de ne rien faire ici
          return;
        }
        apiUrls.forEach((apiUrl) => {
          fetch(apiUrl, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              if (response.status === 200) {
                return response.json();
              } else {
                throw new Error("Erreur lors de la requête à l'API");
              }
            })
            .then((data) => {
              if (apiUrl.includes("specialities")) {
                displaySpecialityResults(data, searchText);
              } else if (apiUrl.includes("practician")) {
                displayPracticianResults(data, searchText);
              } else if (apiUrl.includes("establishments")) {
                displayEstablishmentResults(data, searchText);
              } else if (apiUrl.includes("practicians")) {
                displayPracticianResults(data, searchText);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      }

      function displaySpecialityResults(data, searchText) {
        if (
          data &&
          data.data &&
          data.data.speciality &&
          data.data.speciality.data
        ) {
          const specialities = data.data.speciality.data;
          const filteredSpecialities = specialities.filter((speciality) => {
            return speciality.name.toLowerCase().includes(searchText);
          });

          if (filteredSpecialities.length > 0) {
            filteredSpecialities.slice(0, 5).forEach((speciality) => {
              const resultItem = document.createElement("a");
              resultItem.classList.add(
                "list-group-item",
                "list-group-item-action"
              );
              resultItem.innerHTML = `<i class="fas fa-medkit mr-2 text-primary"></i>${speciality.name}`;
              resultContainer.appendChild(resultItem);
            });
          }
        }
      }

      function displayEstablishmentResults(data, searchText) {
        if (
          data &&
          data.data &&
          data.data.establishment &&
          data.data.establishment.data
        ) {
          const establishments = data.data.establishment.data;
          const filteredEstablishments = establishments.filter(
            (establishment) => {
              return (
                establishment.name.toLowerCase().includes(searchText) ||
                establishment.city.toLowerCase().includes(searchText) // Vérifie le nom de la ville
              );
            }
          );

          if (filteredEstablishments.length > 0) {
            filteredEstablishments.slice(0, 5).forEach((establishment) => {
              const resultItem = document.createElement("a");
              resultItem.classList.add(
                "list-group-item",
                "list-group-item-action"
              );
              resultItem.innerHTML = `<i class="fas fa-hospital mr-2 text-success"></i>${establishment.name} <div class="sous-item">${establishment.city}</div>`;
              resultContainer.appendChild(resultItem);
            });
          }
        }
      }

      //  function displayPracticianResults(data, searchText) {
      //     if (
      //       data &&
      //       data.data
      //       // data.data.practicians &&
      //       // data.data.practicians.data
      //     ) {
      //       const practitioners = data.data;
      //       const filteredPractitioners = practitioners.filter((practitioner) => {
      //         return (
      //           practitioner.first_name.toLowerCase().includes(searchText) ||
      //           practitioner.last_name.toLowerCase().includes(searchText)
      //         );
      //       });

      //       if (filteredPractitioners.length > 0) {
      //         filteredPractitioners.forEach((practitioner) => {
      //           const resultItem = document.createElement("a");
      //           resultItem.classList.add("list-group-item", "list-group-item-action");
      //           resultItem.innerHTML = `<i class="fas fa-user-md mr-2 text-info"></i>${practitioner.first_name} ${practitioner.last_name}  Spécialité: ${practitioner.speciality}`;
      //           resultContainer.appendChild(resultItem);
      //         });
      //       }
      //     }
      //   }
      function displayPracticianResults(data, searchText) {
        if (data && Array.isArray(data)) {
          const practitionersData = data;
          practitionersData.forEach((practitioner) => {
            if (
              practitioner.data &&
              Array.isArray(practitioner.data) &&
              practitioner.data.length > 0
            ) {
              const practitioners = practitioner.data;
              const filteredPractitioners = practitioners.filter((pract) => {
                return (
                  pract.first_name.toLowerCase().includes(searchText) ||
                  pract.last_name.toLowerCase().includes(searchText)
                );
              });

              if (filteredPractitioners.length > 0) {
                filteredPractitioners.forEach((practitioner) => {
                  const resultItem = document.createElement("a");
                  resultItem.classList.add(
                    "list-group-item",
                    "list-group-item-action"
                  );
                  resultItem.innerHTML = `<i class="fas fa-user-md mr-2 text-info"></i>${practitioner.first_name} ${practitioner.last_name} <div class="sous-item"> ${practitioner.speciality}</div>`;
                  resultContainer.appendChild(resultItem);
                });
              }
            }
          });
        }
      }