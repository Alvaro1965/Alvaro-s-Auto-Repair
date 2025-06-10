import { Box, Typography } from "@mui/material";

export default function AboutSection(){

  return(
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
      }}>
      <Box component='section' id="about" sx={{ width: '100%', maxWidth: 730 }}>
        <Typography variant="h3" gutterBottom align="center">
          About
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta esse nihil voluptates impedit blanditiis reprehenderit
          suscipit iusto iure praesentium provident itaque,
          laudantium possimus explicabo omnis quisquam beatae voluptate
          earum atque. Non officiis obcaecati quas dignissimos reiciendis
          placeat incidunt animi quis illum. Nihil quo, dicta laudantium
          praesentium quasi quis facere eum quisquam officiis cupiditate
          hic impedit adipisci et magni veritatis iusto doloribus aliquam
          molestias. Deleniti veniam laboriosam a fugiat molestiae blanditiis
          magni pariatur porro dicta corporis obcaecati eius sit quibusdam doloribus
          provident quae voluptate, omnis expedita ab dolorem perferendis et. Eveniet
          repellendus unde qui ex. Quod repellat omnis velit distinctio aliquid!
        </Typography>
      </Box>
    </Box>
  )
}