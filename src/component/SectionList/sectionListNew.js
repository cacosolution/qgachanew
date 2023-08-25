const SectionListNew = () => {
    return (
        <>
            <section class="section-list-news pc">
                <div class="news-item">
                    <h2>Top Rated Games</h2>
                    <img src="./images/treasure-box.png" alt="" />
                </div>
                <div class="news-item">
                    <h2>Recommend</h2>
                    <img src="./images/treasure-box.png" alt="" />
                </div>
            </section>
            <section class="section-list-news mobile">
                <div class="news-item">
                    <h2>Top Rated Games</h2>
                    <div class="row gx-2">
                        <div class="col-4">
                            <img src="./images/treasure-box.png" alt="" />
                        </div>
                        <div class="col-4">
                            <img src="./images/treasure-box.png" alt="" />
                        </div>
                        <div class="col-4">
                            <img src="./images/treasure-box.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="news-item">
                    <h2>Recommend</h2>
                    <div class="row gx-2">
                        <div class="col-4">
                            <img src="./images/treasure-box.png" alt="" />
                        </div>
                        <div class="col-4">
                            <img src="./images/treasure-box.png" alt="" />
                        </div>
                        <div class="col-4">
                            <img src="./images/treasure-box.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionListNew;