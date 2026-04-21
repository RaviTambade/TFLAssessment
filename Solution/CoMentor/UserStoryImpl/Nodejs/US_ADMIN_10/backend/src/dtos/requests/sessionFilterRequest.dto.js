function sessionFilterRequestDto(query) {
  return {
    name: query.name || null,
  };
}

module.exports = sessionFilterRequestDto;
