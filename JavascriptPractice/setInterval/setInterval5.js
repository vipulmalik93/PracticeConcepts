setInterval(() => console.log("A"), 1000);
setInterval(() => console.log("B"), 2000);

































// EXPLANATION:
                    // The order is not guaranteed by the JavaScript spec —
                    // but in practice (in Chrome, Edge, Firefox),
                    // the timer system tends to queue longer intervals slightly before shorter ones at exact overlaps.

                    // That’s why "B" consistently appears before "A" at 2s, 4s, 6s, etc








// OUTPUT:

                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
                        // A
                        // B
                        // A
