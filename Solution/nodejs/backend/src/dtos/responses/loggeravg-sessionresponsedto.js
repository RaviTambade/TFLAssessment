class AvgSessionResponseDto {
  constructor(data) {
    const seconds = data?.avgSessionTime || 0;

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    this.avgSessionTime = `${h}h ${m}m ${s}s`;
  }
}

module.exports = AvgSessionResponseDto;