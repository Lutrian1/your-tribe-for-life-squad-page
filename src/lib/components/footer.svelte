<script>

  import heading3 from '$lib/assets/pictures/bekijkDeKlassenHeading.svg';

</script>

<footer>

    <img src="{heading3}" alt="" class="bekijkDeKlassenHeading" width="955" height="335">
    <h3 class="bekijkDeKlassenHeadingHidden">Bekijk de klassen</h3>
    
    <nav>

        <a href="/groep-2E" class="classNavigation2E">
            <div class="scribbleBackground"></div>
            <p> 2E </p>
        </a>

        <a href="/groep-2F" class="classNavigation2F">
            <div class="scribbleBackground"></div>
            <p> 2F </p>
        </a>

    </nav>

</footer>

<style>

a {
    text-decoration: none;
    color: var(--main-text-color);
}

footer{
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 5vw 0;

    nav{
        display: flex;
        justify-content: space-around;
    }

    p{
        font-size: clamp(60px, 15vw, 90px);
    }
}

    .bekijkDeKlassenHeading{
        margin-top: 12vh;
        width: 99%;
        height: auto;
        max-width: 800px;
    }

        .bekijkDeKlassenHeadingHidden{
            height: 1px;
            overflow: hidden;
            position: absolute;
            white-space: nowrap;
            width: 1px;
            z-index: 1;
        }
    
    .classNavigation2E, .classNavigation2F{
    width: 50%;
    height: 100%;
    position: relative;
        p{
            text-align: center;
        }
    }

    .scribbleBackground {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
	aspect-ratio: 1.248;    
    background-color: #FCC094;
    clip-path: shape(from 80.9% 8.37%,curve to 85.57% 1.45% with 84.77% 2.74%/85.17% 2.1%,curve to 98.67% 0.03% with 86.1% 1.89%/98.46% -0.29%,curve to 100% 2.05% with 99.13% 0.58%/99.67% 1.24%,curve to 96.49% 11.01% with 99.93% 2.76%/97.33% 5.09%,curve to 96.63% 13.57% with 96.33% 12.16%/96.4% 13.09%,curve to 97.63% 14.71% with 97% 14.33%/97.71% 14.32%,curve to 93.59% 24.58% with 97.53% 15.2%/91.67% 21.47%,curve to 96.43% 25.78% with 93.92% 25.13%/94.75% 25.27%,curve to 96.86% 26.83% with 96.8% 25.89%/97% 26.11%,curve to 95.89% 29.94% with 96.72% 27.55%/96.22% 28.71%,curve to 92.12% 42.75% with 94.78% 33.97%/91.23% 39.28%,curve to 92.62% 42.97% with 92.19% 43.02%/92.39% 43.04%,curve to 97.77% 39.09% with 93.12% 42.8%/94.57% 40.72%,curve to 96.31% 41.99% with 98.4% 38.77%/98.8% 38.77%,curve to 85.6% 55.23% with 93.81% 45.22%/88.52% 51.35%,curve to 79.55% 65.07% with 81.89% 60.16%/80.63% 62.91%,curve to 78.62% 68.18% with 78.95% 66.27%/78.62% 67.14%,curve to 79.2% 69.32% with 78.62% 68.67%/78.69% 69.1%,curve to 82.42% 68.76% with 79.71% 69.54%/80.66% 69.68%,curve to 91.1% 64.56% with 86.8% 66.47%/91.38% 63.38%,curve to 87.08% 74.61% with 90.68% 66.35%/88.82% 70.89%,curve to 84.59% 79.5% with 86.21% 76.46%/85.36% 78.05%,curve to 90.08% 72.42% with 87.92% 74.25%/90.05% 71.54%,curve to 87.34% 84.18% with 90.21% 75.97%/88.45% 79.56%,curve to 85.44% 93.36% with 86.33% 88.44%/85.63% 91.68%,curve to 86.9% 91.98% with 85.91% 92.95%/86.4% 92.49%,curve to 94.42% 83.67% with 91% 87.84%/93.39% 83.04%,curve to 94.32% 84.49% with 94.52% 83.73%/94.45% 84.16%,curve to 92.59% 86.7% with 94.18% 84.82%/93.98% 85.03%,curve to 85.53% 94.63% with 88.68% 91.39%/85.97% 94.73%,curve to 85.44% 93.36% with 85.37% 94.6%/85.35% 94.15%,curve to 79.19% 96.44% with 82.16% 96.21%/79.8% 96.67%,curve to 82.61% 83.54% with 77.34% 95.72%/80.82% 87.89%,curve to 84.59% 79.5% with 83.14% 82.27%/83.82% 80.96%,curve to 84.05% 80.37% with 84.41% 79.78%/84.23% 80.07%,curve to 81.25% 84.93% with 82.54% 82.77%/81.79% 84.26%,curve to 84.24% 74.97% with 80.55% 85.8%/82.21% 81.64%,curve to 80.51% 76.93% with 84.89% 72.81%/84.63% 72.81%,curve to 64.48% 93.26% with 76.39% 81.05%/68.69% 89.15%,curve to 58.34% 98.45% with 59.7% 97.91%/58.28% 99.14%,curve to 60.2% 92.82% with 58.37% 98.01%/58.82% 97.06%,curve to 64.36% 79.65% with 61.35% 89.27%/63.34% 83%,curve to 65.39% 75.7% with 65.39% 76.29%/65.51% 75.72%,curve to 58.58% 83.97% with 65.12% 75.65%/64.41% 77.76%,curve to 51.95% 89.07% with 55.42% 87.34%/53.19% 89.58%,curve to 51.39% 88.18% with 51.69% 88.95%/51.49% 88.74%,curve to 52.21% 82.66% with 51.29% 87.63%/51.29% 86.77%,curve to 55.78% 67.7% with 53.13% 78.56%/54.92% 71.43%,curve to 56.06% 63.81% with 56.63% 63.96%/56.55% 63.53%,curve to 49.22% 70.76% with 54.62% 64.63%/53.01% 65.68%,curve to 37.13% 87.26% with 45.96% 75.15%/40.21% 83.15%,curve to 33.96% 90.18% with 34.04% 91.36%/33.65% 91.58%,curve to 36.65% 80.85% with 34.27% 88.79%/35.26% 85.87%,curve to 40.71% 65.3% with 38.03% 75.83%/39.66% 68.86%,curve to 42.71% 59.16% with 41.87% 61.35%/42.48% 60.44%,curve to 42.4% 58.19% with 42.8% 58.62%/42.74% 58.18%,curve to 39.73% 60.79% with 42.06% 58.2%/41.46% 58.63%,curve to 30.87% 73.91% with 38% 62.96%/35.23% 66.74%,curve to 28.85% 77.29% with 30.23% 74.98%/29.55% 76.11%,curve to 26.66% 81.55% with 28.71% 77.73%/28.18% 78.87%,curve to 17.63% 96.96% with 24.41% 85.5%/19.98% 92.95%,curve to 16.27% 99.28% with 17.03% 97.98%/16.57% 98.76%,curve to 16.27% 99.28% with 15.7% 100.27%/15.73% 100.21%,curve to 17.95% 96.32% with 16.61% 98.68%/17.17% 97.71%,curve to 28.85% 77.29% with 20.35% 92.09%/24.87% 84.02%,curve to 28.87% 77.06% with 28.92% 77.08%/28.91% 77.04%,curve to 20.58% 85.54% with 28.03% 77.73%/26.92% 77.96%,curve to 4.46% 93.05% with 15.14% 92.04%/10.1% 86.45%,curve to 20.58% 55.23% with 8.68% 82.94%/16.68% 64.47%,curve to 13.94% 60.54% with 24.48% 45.99%/14.19% 60.33%,curve to 8.27% 67.18% with 13.33% 61.03%/11.55% 62.39%,curve to 0.61% 77.39% with 4.23% 73.06%/1.33% 77.41%,curve to 1.53% 71.39% with 0.38% 77.39%/0.38% 77.06%,curve to 6.07% 49.4% with 2.69% 65.72%/4.94% 55.02%,curve to 6.93% 45.03% with 6.46% 47.43%/6.72% 46.09%,curve to 0.08% 54.69% with 1.17% 52.97%/-0.39% 55.93%,curve to 7.34% 40.18% with 0.55% 53.44%/3.13% 47.83%,curve to 9.55% 36.23% with 8.04% 38.9%/8.78% 37.58%,curve to 13.78% 25.37% with 10.66% 33.13%/12.13% 29.24%,curve to 20.4% 11.18% with 16.2% 19.67%/18.89% 14.13%,curve to 23.93% 6.03% with 22.16% 7.77%/22.91% 6.53%,curve to 24.73% 6.14% with 24.37% 5.81%/24.81% 5.96%,curve to 18.62% 16.02% with 24.49% 6.69%/14.97% 19.9%,curve to 22.96% 12.47% with 19.1% 15.51%/21.19% 11.71%,curve to 20.26% 17.97% with 23.23% 12.58%/23.23% 12.91%,curve to 9.55% 36.23% with 17.79% 22.18%/13.38% 29.49%,curve to 8.25% 40.01% with 9.03% 37.69%/8.59% 38.98%,curve to 6.93% 45.03% with 7.56% 42.11%/7.32% 43.07%,curve to 7.06% 44.84% with 6.97% 44.97%/7.02% 44.9%,curve to 27.82% 17.59% with 12.94% 36.76%/22.75% 23.93%,curve to 34.86% 9.63% with 33.05% 11.05%/33.82% 10.19%,curve to 32.28% 16.42% with 35.26% 9.42%/35.46% 9.52%,curve to 20.45% 41.32% with 29.41% 22.68%/23.92% 34.19%,curve to 21.63% 39.35% with 20.82% 40.7%/21.21% 40.05%,curve to 36.78% 15.78% with 25.77% 32.55%/32.52% 22.07%,curve to 43.75% 6.29% with 41.04% 9.48%/42.74% 7.38%,curve to 45.88% 4.61% with 45.01% 4.94%/45.96% 4.09%,curve to 41.51% 11.59% with 45.81% 5.05%/44.66% 6.56%,curve to 35.67% 20.46% with 39.88% 14.19%/37.16% 18.29%,curve to 33.89% 22.89% with 34.18% 22.62%/33.84% 22.9%,curve to 40.01% 16.05% with 34.05% 22.83%/34.84% 22.49%,curve to 42.6% 13.51% with 41.4% 14.32%/42.61% 12.63%,curve to 38.5% 19.77% with 42.6% 13.89%/41.15% 14.92%,curve to 33.47% 29.36% with 37.08% 22.38%/34.73% 26.77%,curve to 31.62% 34.95% with 31.91% 32.55%/31.09% 34.48%,curve to 34.69% 32.67% with 31.86% 35.16%/32.45% 34.83%,curve to 43.07% 24.34% with 36.93% 30.5%/40.66% 26.48%,curve to 48.09% 20.49% with 46.36% 21.41%/47.55% 20.54%,curve to 49.69% 20.87% with 48.62% 20.43%/49.34% 20.28%,curve to 49.04% 22.58% with 49.82% 21.1%/49.78% 21.46%,curve to 42.13% 34.26% with 47% 25.69%/44.01% 29.7%,curve to 38.93% 42.8% with 40.26% 38.77%/37.9% 43.65%,curve to 44.75% 34.79% with 39.6% 42.25%/40.41% 40.81%,curve to 59.45% 14.76% with 48.63% 29.4%/55.77% 19.68%,curve to 62.18% 11.16% with 60.74% 13.04%/61.6% 11.9%,curve to 62.08% 11.22% with 62.15% 11.18%/62.11% 11.2%,curve to 59.7% 12.69% with 61.47% 11.55%/60.54% 12.13%,curve to 57.91% 14.16% with 58.57% 13.81%/58.09% 14.1%,curve to 59.7% 12.69% with 57.43% 14.3%/58.46% 13.52%,curve to 60.27% 12.11% with 59.87% 12.52%/60.06% 12.33%,curve to 67.83% 5.6% with 64.28% 7.97%/67.78% 4.55%,curve to 62.94% 13.57% with 67.86% 6.25%/65.9% 10.15%,curve to 59.87% 17.82% with 61.91% 14.76%/60.48% 15.84%,curve to 56.2% 32.17% with 59.31% 19.68%/57.42% 27.46%,curve to 56.27% 32.87% with 56.1% 32.55%/56.11% 32.98%,curve to 60.45% 29.23% with 56.77% 32.54%/57.76% 31.89%,curve to 68.15% 21.62% with 62.59% 27.12%/66.16% 23.45%,curve to 70.84% 19.89% with 70.14% 19.78%/70.54% 19.78%,curve to 71.44% 20.55% with 71.14% 20%/71.34% 20.22%,curve to 71.47% 21.69% with 71.54% 20.88%/71.57% 21.33%,curve to 69.95% 24.19% with 71.39% 21.98%/70.85% 22.85%,curve to 80.9% 8.37% with 73.64% 18.88%/78.14% 12.37%,close);
}

</style>

