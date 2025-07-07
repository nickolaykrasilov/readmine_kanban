<template>
  <section class="main-banner">
    <div class="main-banner__container">
      <div class="main-banner__content">
        <img 
          src="../assets/images/Ellipse.svg" 
          alt="" 
          class="main-banner__ellipse"
        >
        <h1 class="main-banner__title">
          Powerful Agile & Kanban solutions for Redmine
        </h1>
        <div class="main-banner__text-block">
          <p class="main-banner__subtitle">
            Our plugins will help you stay organized and ensure that all necessary tasks are completed throughout the project lifecycle.
          </p>
          <button class="main-banner__btn">
            <span class="main-banner__btn-text">Get a Free Demo</span>
            <span class="main-banner__btn-rect">
              <img 
                src="../assets/icons/Arrow.svg" 
                alt="Arrow"
                class="main-banner__btn-arrow"
              >
            </span>
          </button>
        </div>
        <img
          src="../assets/images/screen.jpg"
          alt="Redmine Kanban Screen"
          class="main-banner__screen"
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.main-banner {
  background: linear-gradient(180deg, #FFFFFF 0%, #E3F0FC 87%);
  padding: 80px 0 120px; 
  min-height: 100vh;
  position: relative;

  &__container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__content {
    text-align: center;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__ellipse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  &__title {
    color: #222939;
    font-family: 'Axiforma', sans-serif;
    font-weight: 700;
    font-size: 60px;
    line-height: 110%;
    max-width: 773px;
    margin: 0 auto 20px;
    position: relative;
    z-index: 1;
  }

  &__text-block {
    width: 436px;
    margin: 0 auto 40px; 
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    z-index: 1;
  }

  &__subtitle {
    color: #222939;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 160%;
    margin: 0;
  }

  &__btn {
    width: 186px;
    height: 48px;
    background: #0094FF;
    border: none;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0 auto;
    box-shadow: 0px 6px 32px 0px rgba(0, 148, 255, 0.7);

    &:hover {
      background: #007acc;
      box-shadow: 0px 6px 32px 0px rgba(0, 148, 255, 0.9);
    }
  }

  &__btn-text {
    position: absolute;
    width: 113px;
    height: 17px;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn-rect {
    position: absolute;
    width: 36px;
    height: 36px;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    background: #4EB2FF;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn-arrow {
    width: 16px;
    height: 16px;
  }

  &__screen {
    width: 1100px;
    height: 616px;
    margin-top: 40px; 
    opacity: 1;
    border-radius: 8px;
    z-index: 1;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    position: relative; 
  }

  @media (max-width: 1200px) {
    &__screen {
      width: 900px;
      height: 504px;
    }
  }

  @media (max-width: 992px) {
    &__screen {
      width: 700px;
      height: 392px;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0 80px;

    &__title {
      font-size: 40px;
      padding: 0 15px;
    }

    &__text-block {
      width: 100%;
      padding: 0 15px;
      gap: 20px;
      margin-bottom: 30px;
    }

    &__btn {
      width: 170px;
      height: 44px;
      
      &-text {
        width: 103px;
        left: 20px;
        font-size: 13px;
      }
      
      &-rect {
        width: 33px;
        height: 33px;
        right: 5px;
      }

      &-arrow {
        width: 14px;
        height: 14px;
      }
    }

    &__screen {
      width: calc(100% - 40px);
      height: auto;
      max-height: 300px;
      margin-top: 30px;
    }
  }
}
</style>